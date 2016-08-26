# UrlQueryParameterCollection resource type

Class for storing and retrieving query parameters. 
The URL can be server-relative and it will parse empty/null strings. 
The query parameters must start with ? to indicate the first query parameter and 
use & for all subsequent parameters. The class also supports fragments. 
Edge cases behavior: 
Empty value (www.example.com/?test=) stores key and empty value 
No equals in queryParam (www.example.com/?test) stores key and undefined value 
Empty queryParam (www.example.com/?&debug=on) stores undefined key and value 
Query param with only equals (www.example.com/?=&debug=on stores empty string key and value




## Methods

| Method	   | Access Modifier | Returns	| Description|
|:-------------|:----|:-------|:-----------|
|constructor      | public | [UrlQueryParameterCollection](UrlQueryParameterCollection.md) | Class for storing and retrieving query parameters |
|getValue      | public | string | Returns the value of the first matching query parameter or undefined if the key doesn't exist |
|getValues      | public | string[] | Returns the values of all of the matching query parameters or undefined if the key doesn't exist |

