/**
 * OpenAPI Petstore
 * This spec is mainly for testing Petstore server and contains fake endpoints, models. Please do not use this for any other purpose. Special characters: \" \\
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The MapTest model module.
 * @module model/MapTest
 * @version 1.0.0
 */
class MapTest {
    /**
     * Constructs a new <code>MapTest</code>.
     * @alias module:model/MapTest
     */
    constructor() { 
        
        MapTest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MapTest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MapTest} obj Optional instance to populate.
     * @return {module:model/MapTest} The populated <code>MapTest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MapTest();

            if (data.hasOwnProperty('map_map_of_string')) {
                obj['map_map_of_string'] = ApiClient.convertToType(data['map_map_of_string'], {'String': {'String': 'String'}});
            }
            if (data.hasOwnProperty('map_of_enum_string')) {
                obj['map_of_enum_string'] = ApiClient.convertToType(data['map_of_enum_string'], {'String': 'String'});
            }
            if (data.hasOwnProperty('direct_map')) {
                obj['direct_map'] = ApiClient.convertToType(data['direct_map'], {'String': 'Boolean'});
            }
            if (data.hasOwnProperty('indirect_map')) {
                obj['indirect_map'] = ApiClient.convertToType(data['indirect_map'], {'String': 'Boolean'});
            }
        }
        return obj;
    }


}

/**
 * @member {Object.<String, Object.<String, String>>} map_map_of_string
 */
MapTest.prototype['map_map_of_string'] = undefined;

/**
 * @member {Object.<String, module:model/MapTest.InnerEnum>} map_of_enum_string
 */
MapTest.prototype['map_of_enum_string'] = undefined;

/**
 * @member {Object.<String, Boolean>} direct_map
 */
MapTest.prototype['direct_map'] = undefined;

/**
 * @member {Object.<String, Boolean>} indirect_map
 */
MapTest.prototype['indirect_map'] = undefined;





/**
 * Allowed values for the <code>inner</code> property.
 * @enum {String}
 * @readonly
 */
MapTest['InnerEnum'] = {

    /**
     * value: "UPPER"
     * @const
     */
    "UPPER": "UPPER",

    /**
     * value: "lower"
     * @const
     */
    "lower": "lower"
};



export default MapTest;

