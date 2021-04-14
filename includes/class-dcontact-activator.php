<?php

/**
 * Fired during plugin activation
 *
 * @link       http://nishantshaligram.github.io
 * @since      1.0.0
 *
 * @package    DContact
 * @subpackage DContact/includes
 */

/**
 * Fired during plugin activation.
 *
 * This class defines all code necessary to run during the plugin's activation.
 *
 * @since      1.0.0
 * @package    DContact
 * @subpackage DContact/includes
 * @author     Nishant Shaligram <nishant.shaligram@gmail.com>
 */
class DContact_Activator {

	/**
	 * Short Description. (use period)
	 *
	 * Long Description.
	 *
	 * @since    1.0.0
	 */
	public static function activate() {
		global $wpdb;
		$table_name = "dcontact";

		$charset_collate = $wpdb->get_charset_collate();

		$sql = "CREATE TABLE $table_name (
		id int(11) NOT NULL AUTO_INCREMENT,
		name text NOT NULL,
		email text NOT NULL,
		subject text NOT NULL,
		message text NOT NULL,
		PRIMARY KEY  (id)
		) $charset_collate;";

		require_once( ABSPATH . 'wp-admin/includes/upgrade.php' );
		dbDelta( $sql );
	}

}
