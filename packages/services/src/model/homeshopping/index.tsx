
export const homeshoppingModel = {
  // /**
  //  *  홈쇼핑 카테고리 목록 정보 Parse
  //  * @api getHomeshoppingCategoriesList
  //  * @param data
  //  * @returns
  //  */
  // parseHomeshoppingCategory(data: CommonCodeResponse[]) {
  //   return data.map((item) => ({
  //     label: item.name || '',
  //     value: item.code || '',
  //   }));
  // },

  // /**
  //  *  홈쇼핑 목록 정보 Parse
  //  * @api homeshoppingFindAll
  //  * @param data
  //  * @returns
  //  */
  // parseHomeshoppingList(data: PageResponseFrontendhomeshoppingHomeShoppingListResponse) {
  //   const { data: list = [], totalCount = 0 } = data;
  //   const shoppingList = list.map((item) => ({
  //     id: item.code,
  //     thumb: item.chanel?.imageResponse?.path
  //       ? `https://staticdev.ybtour.co.kr/promotion${item.chanel.imageResponse.path}`
  //       : '',
  //     title: item.name ? decodeHTMLEntity(item.name!) : '',
  //     info: item.schedule,
  //     link: item.link?.path || '',
  //     channel: {
  //       upcomming: item.upcomingBroadcasts ?? false,
  //       imagePath: item.chanel?.imageResponse
  //         ? `https://staticdev.ybtour.co.kr/promotion${item.chanel.imageResponse.path}`
  //         : '',
  //     },
  //   })) as YBHomeshoppingListItem[];
  //   return {
  //     shoppingList,
  //     totalCount,
  //   };
  // },

  // parseHomeshoppingDetail(data: FrontendhomeshoppingHomeShoppingResponse): YBHomeshoppingDetailItemProps {
  //   return {
  //     color: {
  //       basic: data.color?.basic || '',
  //       fontTab: data.color?.fontTab || '',
  //       clickTab: data.color?.clickTab || '',
  //     },
  //     isFixedTab: data.isFixedTab || false,
  //     isWide: data.isWide || false,
  //     mobileUrl: data.mobileUrl || '',
  //     pcUrl: data.pcUrl || '',
  //     title: data.title ? decodeHTMLEntity(data.title!) : '',
  //     useTemplate: data.useTemplate || false,
  //   };
  // },
};
