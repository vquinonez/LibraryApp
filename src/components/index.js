/* eslint-disable global-require */
module.exports = {
    Header: require('./common/header').default,
    // Form commons
    InputText: require('./common/inputVal').default,
    DropdownList: require('./common/dropdownList').default,
    SwitchVal: require('./common/switchVal').default,
    // Container components
    BookList: require('./bookList/bookList').default,
    FilterForm: require('./filterForm/filterForm').default,
};
  