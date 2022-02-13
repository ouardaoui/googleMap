import { User } from "./User";
import { Company } from "./Company";
import { CustomMap } from "./CustumMap";

const customMap = new CustomMap("map")
const user = new User
const company = new Company


customMap.addMarker(user)
customMap.addMarker(company)