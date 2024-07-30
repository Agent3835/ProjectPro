
export var settings = {
  apiUrl: "http://localhost/lastDance5to/ProjectPro/app/api/",
  load: {
    components: [
      {
        parent: "header",
        url: "components/header",
      },
      {
        parent: "sidemenu",
        url: "components/sidemenu",
      },
      {
        parent: "content",
        url: "components/dashboard",
      },
      {
        parent: "content",
        url: "components/products",
      },
      {
        parent: "content",
        url: "components/cart",
      },
      {
        parent: "content",
        url: "components/adminPanel",
      },
      {
        parent: "content",
        url: "components/home",
      },
      {
        parent: "footer",
        url: "components/footer",
      },
    ],
  },
};
