export const getDataById = (listIds: Array<string>, serviceMethod: any) =>
  Promise.allSettled(listIds.map((id: string) => serviceMethod(id))).then((res) =>
    (res as PromiseFulfilledResult<any>[]).map((item) => ({
      ...item.value,
      id: item.value._id,
    })),
  );
