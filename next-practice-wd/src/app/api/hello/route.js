export async function GET(request) {
  const navBar = [
    {
      link: '/',
      name: 'home',
      id: 0,
      isActive:false
    },
    {
      link: '/pages',
      name: 'pages',
      id: 1,
      isActive:true
    },
    {

      
      link: '/product',
      name: 'product',
      id: 2,
      isActive:false
    },
    {
      link: '/product/list',
      name: 'productList',
      id: 3,
      isActive:false
    },
  ]
  return Response.json({ navBar })
}
