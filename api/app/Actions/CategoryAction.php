<?php
namespace App\Actions;

use Illuminate\Cache\Repository as Cache;
use App\Models\Category\Category;
use App\Actions\Contracts\CategoryActionContract;

class CategoryAction implements CategoryActionContract{

    use ActionTrait;

    /**
    * @param Array $data;
    * @return Category;
    */
    public function create($data): Category
    {
        $this->cache->tags('categories')->flush();
    	return Category::create($data);
    }

    /**
    * @param Int $id;
    * @param Array $data;
    * @return Boolean;
    */
    public function update($id, $data): bool
    {
        $this->cache->tags('categories')->flush();
    	return $this->findOrFail($id)->update($data);
    }

    /**
    * @param Int $id;
    * @return Boolean;
    */
    public function delete($id): bool
    {
        $this->cache->tags('categories')->flush();
    	return $this->findOrFail($id)->delete();
    }

    /**
    * @param Int $id;
    * @return Category;
    */
    public function findOrFail($id): Category
    {
        return Category::findOrFail($id);
    }
}
?>
