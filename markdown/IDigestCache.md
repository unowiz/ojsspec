# IDigestCache interface

IDigestCache is an internal service used by HttpClient to maintain a cache of request digests 
for each SPWeb URL. A request digest is a security token that the SharePoint server requires for 
for any REST write operation, specified via the "X-RequestDigest" HTTP header. It is obtained 
by calling the "/_api/contextinfo" REST endpoint, and expires after a server configurable amount 
of time. For more information, see the MSDN article 
"Complete basic operations using SharePoint 2013 REST endpoints".






## Methods

| Method	   |  Returns	| Description|
|:-------------|:-------|:-----------|
|`[addDigestToCache](#adddigesttocache)`      | ` void `| the digest value will no longer be valid |
|`[clearAllDigests](#clearalldigests)`      | ` void `| Clears all values from the cache |
|`[clearDigest](#cleardigest)`      | ` boolean `| This may be a server-relative or absolute URL |
|`[fetchDigest](#fetchdigest)`      | ` Promise<string> `| This may be a server-relative or absolute URL |



## addDigestToCache

the digest value will no longer be valid. 
NOTE: The expirationTime is a DOMHighResTimeStamp value whose units are 
fractional milliseconds; for example, to specify an expiration 
"5 seconds from right now", use performance.now()+5000.

##### Signature

#### Returns

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `webUrl `    | `undefined` | _%optional%_ undefined |
| `digestValue `    | `undefined` | _%optional%_ undefined |
| `expirationTimestamp `    | `undefined` | _%optional%_ undefined |


## clearAllDigests

Clears all values from the cache.

##### Signature

#### Returns

#### Parameters
None


## clearDigest

This may be a server-relative or absolute URL.

##### Signature

#### Returns

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `webUrl `    | `undefined` | _%optional%_ undefined |


## fetchDigest

This may be a server-relative or absolute URL.

##### Signature

#### Returns

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `webUrl `    | `undefined` | _%optional%_ undefined |
