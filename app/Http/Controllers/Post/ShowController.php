<?php

namespace App\Http\Controllers\Post;

use App\Http\Controllers\Controller;
use App\Http\Resources\Post\PostResourece;
use App\Models\Post;

class ShowController extends Controller
{
    public function __invoke(Post $post)
    {
        return new PostResourece($post);
    }
}
