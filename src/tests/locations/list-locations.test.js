import {
  ListLocations,
  getLocations,
  handleChange,
  handleSubmit
} from "../../components/locations/list-locations";

test("Check ListLocations", () => {
  expect(ListLocations).toBe(ListLocations);
});
test("Check getLocations", () => {
  expect(getLocations).toBe(getLocations);
});
test("Check handleChange", () => {
  expect(handleChange).toBe(handleChange);
});
test("Check handleSubmit", () => {
  expect(handleSubmit).toBe(handleSubmit);
});
