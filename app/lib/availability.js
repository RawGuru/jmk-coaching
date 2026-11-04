// In-person availability. Truthful, editable by the owner.
// status: "open"  = accepting requests (not a scheduled trip)
//         "confirmed" = a paid engagement is set; add real dates in `when`.
// Never mark a city "confirmed" until scope, dates, travel, and payment are agreed.

export const availabilityNote =
  "Private in-person engagements are available by arrangement in cities worldwide. Nothing below is a scheduled trip. A city is confirmed only after scope, dates, travel, and payment are agreed. Once an engagement is confirmed, other compatible work in that city may open up.";

export const windows = [
  { city: "Pittsburgh", status: "open", when: "Home base", note: "Available most weeks." },
  { city: "Los Angeles", status: "open", when: "By arrangement", note: "Accepting requests." },
  { city: "New York", status: "open", when: "By arrangement", note: "Accepting requests." },
  { city: "Barcelona", status: "open", when: "By arrangement", note: "Accepting requests." },
  { city: "Rome", status: "open", when: "By arrangement", note: "Accepting requests." },
  { city: "Mexico City", status: "open", when: "By arrangement", note: "Accepting requests." },
];
