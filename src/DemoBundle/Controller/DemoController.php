<?php
/**
 * Created by PhpStorm.
 * User: Mad Cat
 * Date: 12.06.2017
 * Time: 11:47
 */

namespace DemoBundle\Controller;

use FOS\RestBundle\Controller\FOSRestController;

class DemoController extends FOSRestController
{
    public function getDemosAction()
    {
        $data = array("hello" => "world");
        $view = $this->view($data);
        return $this->handleView($view);
    }
}
