<?php
namespace App\Actions\Contracts;

use App\Models\Category\Category;

/**
 * Interface CategoryActionContract
 */
interface CategoryActionContract
{
	public function create($data): Category;
    public function update($id, $data): bool;
	public function delete($id): bool;
	public function findOrFail($id): Category;
}
