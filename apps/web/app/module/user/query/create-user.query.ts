import { CreateUserDto, DefaultApi } from "@luppa/client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSwaggerApiParams } from "../../../../hook/swagger-api-params";

export const useCreateUser = () => {
  // const queryClient = useQueryClient();
  const { config, basePath, apiClient } = useSwaggerApiParams();
  const userApi = new DefaultApi(config, basePath, apiClient);

  console.log(userApi);

  return userApi.usersControllerCreate;
  // return useMutation(
  //   async (data: CreateUserDto) => {
  //     const res = await userApi.usersControllerCreate(data);
  //     return res.data;
  //   },
  //   {
  //     onSuccess: (data: CreateUserDto) => {
  //       queryClient.setQueryData(
  //         ["create-user"],
  //         (oldData: CreateUserDto[]) => {
  //           return [...oldData, data];
  //         }
  //       );
  //     },
  //   }
  // );
};
