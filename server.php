<?php 

    if ($_SERVER['REQUEST_METHOD'] == "GET") {
        if ($_GET['val'] == "about") {
            $Req = "gamepipe_content/About/about.txt";
            $file = file_get_contents($Req);
            echo $file;
        }

        if ($_GET['val'] == "sponsors") {
            $Req = "gamepipe_content/Sponsors/sponsors.txt";
            $file = file_get_contents($Req);
            echo $file;
        }
        
        if ($_GET['val'] == "people") {
            $Req = "gamepipe_content/People/people.txt";
            $file = file_get_contents($Req);
            echo $file;
        }
        
        if ($_GET['val'] == "rnd") {
            $path = $_SERVER['DOCUMENT_ROOT']."/prototype/" ."gamepipe_content/RnD";
            
            $files=scandir($path);
            //print_r($files);
            $list =array();
            $i=0;
            foreach ($files as $key => $value) {
                if($value!="." && $value!="..")
                {
                    $list[$i++] = file_get_contents($path."/".$value);
                }
            }
            
            echo implode("\n--NEW--\n",array_reverse($list));
        }
        if ($_GET['val'] == "trailers") {
            $path = $_SERVER['DOCUMENT_ROOT']."/prototype/" ."gamepipe_content/Trailers";
            $files=scandir($path);
            
            //print_r($files);
            $list =array();
            $i=0;
            foreach ($files as $key => $value) {
                if($value!="." && $value!="..")
                {
                    $list[$i++] = file_get_contents($path."/".$value);
                }
            }
            echo implode("\n--NEW--\n",array_reverse($list));
        }
        if ($_GET['val'] == "showcase") {
            $path =$_SERVER['DOCUMENT_ROOT']."/prototype/" . "gamepipe_content/Showcase";
            $files=scandir($path);
            //print_r($files);
            $list =array();
            $i=0;
            foreach ($files as $key => $value) {
                if($value!="." && $value!="..")
                {
                    $list[$i++] = file_get_contents($path."/".$value);
                }
            }
            echo implode("\n--NEW--\n",array_reverse($list));
        }
        
        if ($_GET['val'] == "news") {
            $path = $_SERVER['DOCUMENT_ROOT']."/prototype/" ."gamepipe_content/News";
            $files=scandir($path);
            //print_r($files);
            $list =array();
            $i=0;
            foreach ($files as $key => $value) {
                if($value!="." && $value!="..")
                {
                    $list[$i++] = file_get_contents($path."/".$value);
                }
            }
            
            echo implode("\n--NEW--\n",array_reverse($list));
        }
        if ($_GET['val'] == "press") {
            $Req = "gamepipe_content/Press/press.txt";
            $file = file_get_contents($Req);
            echo $file;
        }
        if($_GET['val'] == "press1"){
            $Req = "gamepipe_content/Press/press.txt";
            $file = file_get_contents($Req);
            $your_array = explode("\n", $file);
            // foreach($your_array as $value){
            //     echo $value;
            // }
            $new_array =array();
            $j=0;
            
            for ($i=0; $i< count($your_array); $i=$i+4) {
                $new_array[$j++] = $your_array[$i] ;
                $new_array[$j++] = $your_array[$i+1];
                $new_array[$j++] = $your_array[$i+2];
                // // $new_array[$j++] = dummy(). "<br>";
                // $new_array[$j++] = getImage($your_array[$i]);
                // break;
            }
            // foreach($new_array as $value){
            //     echo $value;
            // }
            echo implode("\n",$new_array);
        }

    }
    // function dummy(){
    //     return "works";
    // }
    function getImage($url)
    {
        $html = file_get_contents($url);
        
        $doc = new DOMDocument();
        @$doc->loadHTML($html);
        
        $tags = $doc->getElementsByTagName('img');
        
        return $tags[0];
        // $size_array = array(); // create an new empty array
        // foreach ($tags as $tag) {
        //         echo $tag ->getAttribute('src'); 
        //     //    $size_array[getimagesize($tag ->getAttribute('src'))] = $tag ->getAttribute('src'); 
        //        //assign size as key and path as value to the newly created array
        // }
        // return $size_array[0];
        // $max_size = max(array_keys($size_array)); // get max size from keys array
        // $max_file = $size_array[$max_size];
        // return $max_file;
     
    }
?>