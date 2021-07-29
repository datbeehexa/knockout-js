var viewModelPerson = {
    firstName: ko.observable("Matt"),
    lastName: ko.observable("Daemon")
}
viewModelPerson.firstName('John');
ko.applyBindings(viewModelPerson);