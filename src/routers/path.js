export const PATH_PAGE = {
  main: "/",
  virtualServices: {
    root: "/virtual-services",
    virtualConsultation: "/virtual-services/virtual-consultation",
    chatBot: "/virtual-services/chat-box",
  },
  findYourShape: {
    root: "/find-your-shape",
    result: "/find-your-shape/result",
  },

  outlet: {
    sale: "/sale",
    new: "/new",
    bestSeller: "/best-sellers",
    makeup: "/makeup",
    skincare: "/skincare",
    newCollection: "/new-collection",
    newCollectionItem: "/new-collection/:slug",
    productDetail: "/product-detail/:id",
    cart: "/cart",
  },

  mobile: {
    root: "/mobile",
    findYourShape: {
      step1: "/mobile/fys-step-1",
      step2: "/mobile/fys-step-2",
      step3: "/mobile/fys-step-3",
    },
  },
};
