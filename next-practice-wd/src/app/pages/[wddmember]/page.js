
export const metadata = {
  title: 'Pages Create Next App',
  description: 'Generated by create next app',
}

export default function pagesNamePage({
  params,
  searchParams
}) {

  console.log("@@@@ params",params);
  console.log("@@@@ searchParams",searchParams);

  return (
      <h2>
        {params.wddmember} is good {searchParams.title}
      </h2>
  )
};
