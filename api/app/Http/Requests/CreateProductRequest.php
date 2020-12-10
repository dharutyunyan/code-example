<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CreateProductRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required|max:255',
            'price' => 'required|numeric',
            'sku' => 'required|unique:products',
            'category_id' => 'required|integer',
            'description' => 'nullable'
        ];
    }
}
