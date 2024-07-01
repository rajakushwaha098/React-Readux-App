



import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Define async thunk for fetching product data
export const fetchProductData = createAsyncThunk("cart/fetchTodos", async (url) => {
    try {
        const response = await fetch("https://api.pujakaitem.com/api/products");
        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }
        return response.json();
    } catch (error) {
        throw new Error(error.message);
    }
});


// Define initial state
const initialState = {
    isLoading: false,
    isError: false,
    products: [],    
    featureProducts: [],
    isSingleLoading: false,
    singleProduct: {},
    cartData: [],
    filterData:[],
    sorting_value: "lowest",
    stock:0,
    catchAmount:0,
total:0,
total_price: 0,
  shipping_fee: 50000,
  sub_Total_price :0,
    filters: {
        text: "",
        category: "all",
        company: "all",
        color: "all",
        maxPrice: 6000000,
        price: 0,
        minPrice: 0,
    },

};

// Create cart slice
const cartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
        // firstLoadArray: (state, action) => {
        //     state.products = action.payload;
        // },
        filterbycategory: (state, action) => {
            state.filterData = action.payload;
            // console.log("action.payload",action.payload)
        },    
        
        addToCart:(state,action)=>{
            state.cartData.push(action.payload);
            state.stock +=action.payload.stock;
           
            // console.log("action.payload.stock",action.payload.stock)
            // console.log("action.payload.amount",action.payload.amount)
                    },

                    // removeItem:(state,action)=>{
                    //     state.cartData.push(action.payload);
                    //     state.stock +=action.payload.stock;
                    //     console.log("action.payload.stock",action.payload.stock)
                    //             },
                               
             deleteItem:(state,action)=>{
           return {
           ...state,
           cartData:state.cartData.filter((item)=> item.id !== action.payload),
            
        }                           },

             subTotalPlus :(state,action)=>{
             
            state.total_price +=action.payload
        //    console.log("action.payload.amount",action.payload)
                     },

                     
            // subTotalMinus :(state,action)=>{
             
            //     state.total_price -=action.payload
            // //    console.log("action.payload.amount",action.payload)
            //              },



            subTotalMinus: (state, action) => {
                // Ensure total_price doesn't become negative
                if (state.total_price - action.payload >= 0) {
                    state.total_price -= action.payload;
                } else {
                    state.total_price = action.payload; // Set total_price to 0 if it would become negative
                }
            },
            getSubTotal: (state, action) => {
                state.sub_Total_price +=action.payload
                // console.log(" state.total_price",action.payload)
            },
            

                         subTotalDeleteById :(state,action)=>{
             
                            state.total_price -=action.payload
                           console.log(" state.total_price",action.payload)
                                     },


         //  ye code useSate ki value ko dusre page mai le ja rha hai bs 
               ForCatchAmout:(state,action)=>{
             
                 state.catchAmount =action.payload
               console.log("action.payload.amount",action.payload)
                                 },
    },



    extraReducers: (builder) => {
        builder.addCase(fetchProductData.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
        });
        builder.addCase(fetchProductData.fulfilled, (state, action) => {
            state.isLoading = false;
            state.featureProducts = action.payload;
            state.products  = action.payload;    
        });
        builder.addCase(fetchProductData.rejected, (state) => {
            state.isLoading = false;
            state.isError = true;
        });

        // builder.addCase(getSingleProduct.pending, (state) => {
        //     state.isSingleLoading = true;
        //     state.isError = false;
        // });
        // builder.addCase(getSingleProduct.fulfilled, (state, action) => {
        //     state.isSingleLoading = false;
        //     state.singleProduct = action.payload;
        // });
        // builder.addCase(getSingleProduct.rejected, (state) => {
        //     state.isSingleLoading = false;
        //     state.isError = true;
        // });
    },
});

// Export individual reducer actions
export const { firstLoadArray, filterbycategory,addToCart,addToCartOther,
    removeItem,deleteItem, subTotalPlus,subTotalMinus ,  ForCatchAmout,subTotalDeleteById, getSubTotal} = cartSlice.actions;

// Export the reducer
export default cartSlice.reducer;
