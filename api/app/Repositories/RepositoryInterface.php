<?php
namespace App\Repositories;

use Illuminate\Database\Eloquent\Model;

/**
* Interface RepositoryInterface
* @package App\Repositories
*/
interface RepositoryInterface
{
   /**
    * @param $id
    * @return Model
    */
   public function find($id): ?Model;
}

?>
