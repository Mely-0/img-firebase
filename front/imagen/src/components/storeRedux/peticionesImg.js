import { createApi , fetchBaseQuery} from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const PeticionesImg = createApi({
    reducerPath: 'PeticionesImg',

    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8080'
    }),
    tagTypes: ["refreshGetImg","refreshPostImg"],
    endpoints:(builder)=>({
        getObtenerImg: (builder).query({
            query:()=>({
                method:"GET",
                url:"/imagenes",
                headers:{"Content-Type":"application/json"}
            }),
            providesTags:["refreshGetImg"]
        }),
        postAgregarImg:builder.mutation({
            query:({dataImg})=>({
                header:{"Content-Type": "application/json"},
                url:"/imagenes",
                method: "POST",
                body: dataImg
            }),
            invalidatesTags:["refreshGetImg","refreshPostImg"]
        })
    })
})

export const {useGetObtenerImgQuery ,usePostAgregarImgMutation } = PeticionesImg