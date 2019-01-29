//
// Swift4TestAPI.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation
import Alamofire



open class Swift4TestAPI {
    /**
     Get all of the models
     
     - parameter clientId: (query) id that represent the Api client 
     - parameter queue: The queue on which the completion handler is dispatched.
     - parameter completion: completion handler to receive the data and the error objects
     */
    open class func getAllModels(clientId: String, queue: DispatchQueue? = nil, completion: @escaping ((_ data: GetAllModelsResult?,_ error: Error?) -> Void)) {
        getAllModelsWithRequestBuilder(clientId: clientId).execute(queue: queue) { (response, error) -> Void in
            completion(response?.body, error)
        }
    }


    /**
     Get all of the models
     - GET /allModels
     - This endpoint tests get a dictionary which contains examples of all of the models.
     - parameter clientId: (query) id that represent the Api client 
     - returns: RequestBuilder<GetAllModelsResult> 
     */
    open class func getAllModelsWithRequestBuilder(clientId: String) -> RequestBuilder<GetAllModelsResult> {
        let path = "/allModels"
        let URLString = TestClientAPI.basePath + path
        let parameters: [String:Any]? = nil
        
        var url = URLComponents(string: URLString)
        url?.queryItems = APIHelper.mapValuesToQueryItems([
            "client_id": clientId
        ])

        let requestBuilder: RequestBuilder<GetAllModelsResult>.Type = TestClientAPI.requestBuilderFactory.getBuilder()

        return requestBuilder.init(method: "GET", URLString: (url?.string ?? URLString), parameters: parameters, isBody: false)
    }

}
