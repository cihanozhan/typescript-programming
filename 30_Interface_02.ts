/*
    Interface

    http://cihanozhan.com
*/

interface IPersonService {
    Save();
}

class CustomerService implements IPersonService {
    Save() {
        // ...
    }
}

