<?php

namespace App\Http\Controllers;

use ZipArchive;
use Illuminate\Support\Str;
use App\Models\Shippingcity;
use Illuminate\Http\Request;

class OtherController extends Controller
{

    public function getShippingcity(){
        $all = Shippingcity::all();
        return response()->json(['all'=>$all]);
    }








    public function addCvc(Request $request)
    {
        $file = $request->file('csv');
        $path = Str::random(5).'.'.$file->getClientOriginalExtension();
        $file->storeAs('other', $path, 'public');
        $zip = new ZipArchive;
        if ($zip->open(public_path('storage').'\\other\\'.$path) === true) {
            $extractedFilePath = file_get_contents(public_path('storage').'\\other\\'.$path);
            dd($extractedFilePath);
            if ($extr = $zip->extractTo(public_path('storage').'\\other\\', [$zip->getNameIndex(0)])) {
                $zip->close();
            } else {
                echo 'Failed to extract the CSV file from the ZIP archive.';
            }
        } else {
            echo 'Failed to open the ZIP archive.';
        }

    }
}
