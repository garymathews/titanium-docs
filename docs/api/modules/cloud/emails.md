---
editUrl: https://github.com/appcelerator-modules/ti.cloud/edit/master/apidoc/Emails/Emails.yml
---
# Modules.Cloud.Emails

<TypeHeader/>

## Examples

### Send Email

This example sends an Email and checks the response.

``` js
Cloud.Emails.send({
    template: 'welcome',
    recipients: 'joe@company.com'
}, function (e) {
    if (e.success) {
        alert('Success');
    } else {
        alert('Error:\n' +
            ((e.error && e.message) || JSON.stringify(e)));
    }
});
```

<ApiDocs/>
