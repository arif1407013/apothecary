interface CAR_COMPANY {
  id?: number;
  company: string;
  country: string;
}

var datas: CAR_COMPANY[] = [
  {
    id: 1,
    company: "Toyota",
    country: "Japan",
  },
  {
    id: 2,
    company: "Nissan",
    country: "Japan",
  },
  {
    id: 3,
    company: "Porsche",
    country: "Germany",
  },
  {
    id: 4,
    company: "Ferrari",
    country: "Italy",
  },
];

// http://localhost:3000/faq

export const GET = async () => {
  return Response.json(datas);
};

export const POST = async (data: Request) => {
  let request = await data.json();
  if (!("company" in request) || !("country" in request)) {
    throw new Error("POST failed");
  }
  datas.push({
    id: datas?.length + 1,
    ...(request as CAR_COMPANY)
  });
  return new Response(JSON.stringify(request), {
    status: 201,
  });
};
