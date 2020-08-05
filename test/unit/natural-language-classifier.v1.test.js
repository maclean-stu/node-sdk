/**
 * (C) Copyright IBM Corp. 2018, 2020.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

const { NoAuthAuthenticator, unitTestUtils } = require('ibm-cloud-sdk-core');
const NaturalLanguageClassifierV1 = require('../../dist/natural-language-classifier/v1');

const {
  getOptions,
  checkUrlAndMethod,
  checkMediaHeaders,
  expectToBePromise,
  checkForSuccessfulExecution,
} = unitTestUtils;

const service = {
  authenticator: new NoAuthAuthenticator(),
  url: 'https://api.us-south.natural-language-classifier.watson.cloud.ibm.com',
};

const naturalLanguageClassifier = new NaturalLanguageClassifierV1(service);
const createRequestMock = jest.spyOn(naturalLanguageClassifier, 'createRequest');

// dont actually create a request
createRequestMock.mockImplementation(() => Promise.resolve());

afterEach(() => {
  createRequestMock.mockClear();
});

describe('NaturalLanguageClassifierV1', () => {
  describe('classify', () => {
    describe('positive tests', () => {
      test('should pass the right params to createRequest', () => {
        // parameters
        const classifierId = 'fake_classifierId';
        const text = 'fake_text';
        const params = {
          classifierId,
          text,
        };

        const classifyResult = naturalLanguageClassifier.classify(params);

        // all methods should return a Promise
        expectToBePromise(classifyResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(options, '/v1/classifiers/{classifier_id}/classify', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(options.body['text']).toEqual(text);
        expect(options.path['classifier_id']).toEqual(classifierId);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const classifierId = 'fake_classifierId';
        const text = 'fake_text';
        const userAccept = 'fake/header';
        const userContentType = 'fake/header';
        const params = {
          classifierId,
          text,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        naturalLanguageClassifier.classify(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async done => {
        // required parameters for this method
        const requiredParams = ['classifierId', 'text'];

        let err;
        try {
          await naturalLanguageClassifier.classify({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
        done();
      });

      test('should reject promise when required params are not given', done => {
        // required parameters for this method
        const requiredParams = ['classifierId', 'text'];

        const classifyPromise = naturalLanguageClassifier.classify();
        expectToBePromise(classifyPromise);

        classifyPromise.catch(err => {
          expect(err.message).toMatch(/Missing required parameters/);
          done();
        });
      });
    });
  });
  describe('classifyCollection', () => {
    describe('positive tests', () => {
      test('should pass the right params to createRequest', () => {
        // parameters
        const classifierId = 'fake_classifierId';
        const collection = 'fake_collection';
        const params = {
          classifierId,
          collection,
        };

        const classifyCollectionResult = naturalLanguageClassifier.classifyCollection(params);

        // all methods should return a Promise
        expectToBePromise(classifyCollectionResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(options, '/v1/classifiers/{classifier_id}/classify_collection', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(options.body['collection']).toEqual(collection);
        expect(options.path['classifier_id']).toEqual(classifierId);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const classifierId = 'fake_classifierId';
        const collection = 'fake_collection';
        const userAccept = 'fake/header';
        const userContentType = 'fake/header';
        const params = {
          classifierId,
          collection,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        naturalLanguageClassifier.classifyCollection(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async done => {
        // required parameters for this method
        const requiredParams = ['classifierId', 'collection'];

        let err;
        try {
          await naturalLanguageClassifier.classifyCollection({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
        done();
      });

      test('should reject promise when required params are not given', done => {
        // required parameters for this method
        const requiredParams = ['classifierId', 'collection'];

        const classifyCollectionPromise = naturalLanguageClassifier.classifyCollection();
        expectToBePromise(classifyCollectionPromise);

        classifyCollectionPromise.catch(err => {
          expect(err.message).toMatch(/Missing required parameters/);
          done();
        });
      });
    });
  });
  describe('createClassifier', () => {
    describe('positive tests', () => {
      test('should pass the right params to createRequest', () => {
        // parameters
        const trainingMetadata = 'fake_trainingMetadata';
        const trainingData = 'fake_trainingData';
        const params = {
          trainingMetadata,
          trainingData,
        };

        const createClassifierResult = naturalLanguageClassifier.createClassifier(params);

        // all methods should return a Promise
        expectToBePromise(createClassifierResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(options, '/v1/classifiers', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = 'multipart/form-data';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(options.formData['training_metadata'].data).toEqual(trainingMetadata);
        expect(options.formData['training_metadata'].contentType).toEqual('application/json');
        expect(options.formData['training_data'].data).toEqual(trainingData);
        expect(options.formData['training_data'].contentType).toEqual('text/csv');
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const trainingMetadata = 'fake_trainingMetadata';
        const trainingData = 'fake_trainingData';
        const userAccept = 'fake/header';
        const userContentType = 'fake/header';
        const params = {
          trainingMetadata,
          trainingData,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        naturalLanguageClassifier.createClassifier(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async done => {
        // required parameters for this method
        const requiredParams = ['trainingMetadata', 'trainingData'];

        let err;
        try {
          await naturalLanguageClassifier.createClassifier({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
        done();
      });

      test('should reject promise when required params are not given', done => {
        // required parameters for this method
        const requiredParams = ['trainingMetadata', 'trainingData'];

        const createClassifierPromise = naturalLanguageClassifier.createClassifier();
        expectToBePromise(createClassifierPromise);

        createClassifierPromise.catch(err => {
          expect(err.message).toMatch(/Missing required parameters/);
          done();
        });
      });
    });
  });
  describe('listClassifiers', () => {
    describe('positive tests', () => {
      test('should pass the right params to createRequest', () => {
        // parameters
        const params = {};

        const listClassifiersResult = naturalLanguageClassifier.listClassifiers(params);

        // all methods should return a Promise
        expectToBePromise(listClassifiersResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(options, '/v1/classifiers', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const userAccept = 'fake/header';
        const userContentType = 'fake/header';
        const params = {
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        naturalLanguageClassifier.listClassifiers(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });

      test('should not have any problems when no parameters are passed in', () => {
        // invoke the method
        naturalLanguageClassifier.listClassifiers({});
        checkForSuccessfulExecution(createRequestMock);
      });

      test('should use argument as callback function if only one is passed in', async () => {
        // invoke the method
        const callbackMock = jest.fn();
        await naturalLanguageClassifier.listClassifiers(callbackMock);
        expect(callbackMock).toHaveBeenCalled();
      });
    });
  });
  describe('getClassifier', () => {
    describe('positive tests', () => {
      test('should pass the right params to createRequest', () => {
        // parameters
        const classifierId = 'fake_classifierId';
        const params = {
          classifierId,
        };

        const getClassifierResult = naturalLanguageClassifier.getClassifier(params);

        // all methods should return a Promise
        expectToBePromise(getClassifierResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(options, '/v1/classifiers/{classifier_id}', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(options.path['classifier_id']).toEqual(classifierId);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const classifierId = 'fake_classifierId';
        const userAccept = 'fake/header';
        const userContentType = 'fake/header';
        const params = {
          classifierId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        naturalLanguageClassifier.getClassifier(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async done => {
        // required parameters for this method
        const requiredParams = ['classifierId'];

        let err;
        try {
          await naturalLanguageClassifier.getClassifier({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
        done();
      });

      test('should reject promise when required params are not given', done => {
        // required parameters for this method
        const requiredParams = ['classifierId'];

        const getClassifierPromise = naturalLanguageClassifier.getClassifier();
        expectToBePromise(getClassifierPromise);

        getClassifierPromise.catch(err => {
          expect(err.message).toMatch(/Missing required parameters/);
          done();
        });
      });
    });
  });
  describe('deleteClassifier', () => {
    describe('positive tests', () => {
      test('should pass the right params to createRequest', () => {
        // parameters
        const classifierId = 'fake_classifierId';
        const params = {
          classifierId,
        };

        const deleteClassifierResult = naturalLanguageClassifier.deleteClassifier(params);

        // all methods should return a Promise
        expectToBePromise(deleteClassifierResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(options, '/v1/classifiers/{classifier_id}', 'DELETE');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(options.path['classifier_id']).toEqual(classifierId);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const classifierId = 'fake_classifierId';
        const userAccept = 'fake/header';
        const userContentType = 'fake/header';
        const params = {
          classifierId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        naturalLanguageClassifier.deleteClassifier(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async done => {
        // required parameters for this method
        const requiredParams = ['classifierId'];

        let err;
        try {
          await naturalLanguageClassifier.deleteClassifier({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
        done();
      });

      test('should reject promise when required params are not given', done => {
        // required parameters for this method
        const requiredParams = ['classifierId'];

        const deleteClassifierPromise = naturalLanguageClassifier.deleteClassifier();
        expectToBePromise(deleteClassifierPromise);

        deleteClassifierPromise.catch(err => {
          expect(err.message).toMatch(/Missing required parameters/);
          done();
        });
      });
    });
  });
});
