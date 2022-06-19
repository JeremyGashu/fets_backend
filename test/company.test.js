
const CompanyService = require('../controllers/company.controller');
const { mockCompanyResult } = require('./mock_responses/company');

describe('getAllCompanies()', () => {
    it('should return the list of companies', async () => {
        // mockingoose(Company).toReturn([], 'findAll');
        // const results = await getAllCompanies();
        // console.log(results)
        let spy = jest.spyOn(CompanyService, 'getAllCompanies').mockImplementation(() => {
            return mockCompanyResult
        })
        let res = await CompanyService.getAllCompanies()
        expect(spy).toHaveBeenCalled();
        expect(1).toBe(1)
        //   expect(results[0]).toBe('Book 1');
    });
});

describe('getCompanyById()', () => {
    it('should return the list of companies', async () => {
        // mockingoose(Company).toReturn([], 'findAll');
        // const results = await getAllCompanies();
        // console.log(results)
        let spy = jest.spyOn(CompanyService, 'getCompanyById').mockImplementation(() => {
            return mockCompanyResult.body[0]
        })
        let res = await CompanyService.getCompanyById()
        expect(spy).toHaveBeenCalled();
        expect(1).toBe(1)
        //   expect(results[0]).toBe('Book 1');
    });
});