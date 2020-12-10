<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateProductRequest extends FormRequest
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
            'category_id' => 'required|integer',
            'description' => 'nullable',
            Rule::unique('sku')->ignore($this->request->get('sku'))
        ];
    }
}
