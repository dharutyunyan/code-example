<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateProductRequest;
use App\Http\Requests\UpdateProductRequest;
use App\Models\Product\Product;
use App\Http\Resources\ProductResource;
use App\Repositories\ProductRepositoryInterface;
use App\Actions\Contracts\ProductActionContract;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     * @param  App\Repositories\ProductRepositoryInterface  $repo
     * @return \Illuminate\Http\Response
     */
    public function index(ProductRepositoryInterface $repo)
    {
        return response()->json($repo->all());
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\CreateProductRequest  $request
     * @param  \App\Actions\Contracts\ProductActionContract  $actions
     * @return \Illuminate\Http\Response
     */
    public function store(CreateProductRequest $request, ProductActionContract $actions)
    {
        $validatedData = $request->validated();
        if($product = $actions->create($validatedData)){
            return response()->json( $product, 201 );
        }else{
            return response()->json( 'Error', 202 );
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @param  App\Repositories\ProductRepositoryInterface  $repo
     * @return \Illuminate\Http\Response
     */
    public function edit($id, ProductRepositoryInterface $repo)
    {
        if($product = $repo->find($id)){
            return response()->json( new ProductResource($product), 200 );
        }else{
            return response()->json( [ 'message' => 'Error' ] );
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateProductRequest  $request
     * @param  int  $id
     * @param  \App\Actions\Contracts\ProductActionContract  $actions
     * @return \Illuminate\Http\Response
     */
     public function update(UpdateProductRequest $request, $id, ProductActionContract $actions)
     {
         $validatedData = $request->validated();
         if($product = $actions->update($id, $validatedData)){
             return response()->json( ['message' => 'Updated successfully'], 200 );
         }else{
             return response()->json( [ 'message' => 'Error' ] );
         }
     }

    /**
     * Remove the specified resource from storage.
     * @param int $id
     * @param  \App\Actions\Contracts\ProductActionContract  $actions
     * @return \Illuminate\Http\Response
     */
    public function destroy($id, ProductActionContract $actions)
    {
        if($actions->delete($id)){
            return response()->json( [ 'message' => 'Deleted successfully'], 204 );
        }else{
            return response()->json( [ 'message' => 'Error' ] );
        }
    }
}
