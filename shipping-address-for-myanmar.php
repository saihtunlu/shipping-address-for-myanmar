<?php
if (!defined('ABSPATH')) {
	exit;
}
/*
Plugin Name: Shipping Address For Myanmar
Description: This plugin was created in order to make it easy for creating shipping address in myanmar. 
Author: Sai Htun Lu
Version: 1.0.0
Author URI: http://saihtunlu.me/
Requires at least: 4.7
Tested up to:5.4.2
WC requires at least:3.0.0
WC tested up to:4.2.2 
Requires PHP: 7.0
License: GPL2
Last Updated Date: 11-July-2020
*/
if (!class_exists('Shipping_Address_For_Myanmar')) {
	class Shipping_Address_For_Myanmar
	{
		public function __construct()
		{
			include_once('includes/shipping-address-for-myanmar-init.php');
			$ni_order_columns_init = new Shipping_Address_For_Myanmar_init();
		}
	}
	$obj = new Shipping_Address_For_Myanmar();
}
