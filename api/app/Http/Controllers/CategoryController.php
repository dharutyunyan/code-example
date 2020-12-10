<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Category;
use App\Http\Resources\CategoryResource;
use App\Repositories\CategoryRepositoryInterface;
use App\Actions\Contracts\CategoryActionContract;

class CategoryController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @param  App\Repositories\CategoryRepositoryInterface  $repo
     * @return \Illuminate\Http\Response
     */
    public function index(CategoryRepositoryInterface $repo)
    {
        return response()->json($repo->all());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Actions\Contracts\CategoryActionContract  $actions
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, CategoryActionContract $actions)
    {
        if($category = $actions->create($request->all())){
            return response()->json( ['category' => new CategoryResource($category), 'message' => 'Created successfully'], 201 );
        }else{
            return response()->json( [ 'message' => 'Error' ] );
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @param  App\Repositories\CategoryRepositoryInterface  $repo
     * @return \Illuminate\Http\Response
     */
    public function edit($id, CategoryRepositoryInterface $repo)
    {
        if($category = $repo->find($id)){
            return response()->json( ['category' => new CategoryResource($category), 'message' => 'Created successfully'], 200 );
        }else{
            return response()->json( [ 'message' => 'Error' ] );
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param int $id
     * @param  \App\Actions\Contracts\CategoryActionContract  $actions
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id, CategoryActionContract $actions)
    {
        if($category = $actions->update($request->all())){
            return response()->json( [ 'message' => 'Updated successfully'], 200 );
        }else{
            return response()->json( [ 'message' => 'Error' ] );
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @param  \App\Actions\Contracts\CategoryActionContract  $actions
     * @return \Illuminate\Http\Response
     */
    public function destroy($id, CategoryActionContract $actions)
    {
        if($actions->delete($id)){
            return response()->json( [ 'message' => 'Deleted successfully'], 204 );
        }else{
            return response()->json( [ 'message' => 'Error' ] );
        }
    }
}
