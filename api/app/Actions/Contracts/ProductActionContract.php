<?php
namespace App\Actions\Contracts;

use App\Models\Product\Product;

/**
 * Interface ProductActionContract
 */
interface ProductActionContract
{
	public function create($data): Product;
    public function update($id, $data): bool;
	public function delete($id): bool;
	public function findOrFail($id): Product;
}
