<?php
namespace App\Actions;

use Illuminate\Cache\Repository as Cache;
use App\Models\Product\Product;
use App\Actions\Contracts\ProductActionContract;

class ProductAction implements ProductActionContract{

    use ActionTrait;

    /**
    * @param Array $data;
    * @return Product;
    */
    public function create($data): Product
    {
        $this->cache->tags('products')->flush();
    	return Product::create($data);
    }

    /**
    * @param Int $id;
    * @param Array $data;
    * @return Boolean;
    */
    public function update($id, $data): bool
    {
        $this->cache->tags('products')->flush();
    	return $this->findOrFail($id)->update($data);
    }

    /**
    * @param Int $id;
    * @return Boolean;
    */
    public function delete($id): bool
    {
        $this->cache->tags('products')->flush();
    	return $this->findOrFail($id)->delete();
    }

    /**
    * @param Int $id;
    * @return Product;
    */
    public function findOrFail($id): Product
    {
        return Product::findOrFail($id);
    }
}
?>
