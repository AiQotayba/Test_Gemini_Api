```js
CoursesSchema =new {
  title: String,
  context: String,
  links: [String],
  keys: [String],
  location: String,
  age:{start:Num,end:Num},
  center: String,
  nationality: String,
  price: Number,
  IsAge: Boolean,
  IsPublished: Boolean,
  TypePost: String,//session, course,  volunteer, training, job
  "nationality": [
    {  "value":"Lebanese",  "label": "لبناني"},
    {"value": "Palestinian","label": "فلسطيني"},
    {"value": "Syrian","label": "سوري"},
    {"value": "All","label": "الكل"}
  ] // يجب ان تكون الجنسية وفقا للقيم هذه فقط 
}
```
   // end schema
context syntax markdown
only lang arabic
If the phone number exists, process it and convert it into a WhatsApp link, and add it to the links section 
If there is a course that is not online, the site must be added, and if it is online, the site can be added optionally
اذا  كان الردود فيها صور استخرج النصوص من الصور واضفها للسياق النصي للاعلان
تحليل النصوص في الردود القادمة وتحويلها  وتحوليه الى json بنفس هذه البنية أعلاه
انتظرني
Reply all format json
----