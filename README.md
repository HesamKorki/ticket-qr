# ticket-qr
Attendance checking with tickets that have QR code


The idea is that you get a google form and keep the results in a google sheet. Then you have someone validating the payment. For each attendee who paid, we create a ticket id probably md5 of the email would be ok. 

from the google sheet we create an App script that checks if that ticket id exists and would count the number of times it was checked.

The qr codes should be generated to contain the following:

```json
https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec?qr={ticket_id}
```
