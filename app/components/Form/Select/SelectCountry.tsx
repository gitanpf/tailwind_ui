import * as Select from "@radix-ui/react-select";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import SelectItem from "./SelectItem";

const Country = () => (
  <Select.Root>
    <Select.Trigger
      className="flex h-full w-full flex-1 items-center justify-between border-zinc-400 bg-transparent outline-none focus:ring-0"
      aria-label="Country"
    >
      <Select.Value className="text-xs" placeholder="Select your country…" />
      <Select.Icon className="text-zinc-400">
        <ChevronDownIcon className="h-4 w-4" />
      </Select.Icon>
    </Select.Trigger>

    <Select.Portal>
      <Select.Content className="animate-slide-down-and-fade overflow-hidden rounded-md bg-white ring-transparent">
        <Select.ScrollUpButton className="flex h-6 cursor-default items-center justify-center bg-white text-violet-700">
          <ChevronUpIcon className="h-4 w-4 text-violet-700" />
        </Select.ScrollUpButton>

        <Select.Viewport className="p-1">
          <Select.Group>
            <Select.Label className="px-6 text-xs leading-7 text-violet-500">
              Country
            </Select.Label>
            <SelectItem value="AF">Afghanistan</SelectItem>
            <SelectItem value="AL">Albania</SelectItem>
            <SelectItem value="DZ">Algeria</SelectItem>
            <SelectItem value="AD">Andorra</SelectItem>
            <SelectItem value="AO">Angola</SelectItem>
            <SelectItem value="AG">Antigua and Barbuda</SelectItem>
            <SelectItem value="AR">Argentina</SelectItem>
            <SelectItem value="AM">Armenia</SelectItem>
            <SelectItem value="AU">Australia</SelectItem>
            <SelectItem value="AT">Austria</SelectItem>
            <SelectItem value="AZ">Azerbaijan</SelectItem>
            <SelectItem value="BS">Bahamas</SelectItem>
            <SelectItem value="BH">Bahrain</SelectItem>
            <SelectItem value="BD">Bangladesh</SelectItem>
            <SelectItem value="BB">Barbados</SelectItem>
            <SelectItem value="BY">Belarus</SelectItem>
            <SelectItem value="BE">Belgium</SelectItem>
            <SelectItem value="BZ">Belize</SelectItem>
            <SelectItem value="BJ">Benin</SelectItem>
            <SelectItem value="BT">Bhutan</SelectItem>
            <SelectItem value="BO">Bolivia</SelectItem>
            <SelectItem value="BA">Bosnia and Herzegovina</SelectItem>
            <SelectItem value="BW">Botswana</SelectItem>
            <SelectItem value="BR">Brazil</SelectItem>
            <SelectItem value="BN">Brunei</SelectItem>
            <SelectItem value="BG">Bulgaria</SelectItem>
            <SelectItem value="BF">Burkina Faso</SelectItem>
            <SelectItem value="BI">Burundi</SelectItem>
            <SelectItem value="CV">Cabo Verde</SelectItem>
            <SelectItem value="KH">Cambodia</SelectItem>
            <SelectItem value="CM">Cameroon</SelectItem>
            <SelectItem value="CA">Canada</SelectItem>
            <SelectItem value="CF">Central African Republic</SelectItem>
            <SelectItem value="TD">Chad</SelectItem>
            <SelectItem value="CL">Chile</SelectItem>
            <SelectItem value="CN">China</SelectItem>
            <SelectItem value="CO">Colombia</SelectItem>
            <SelectItem value="KM">Comoros</SelectItem>
            <SelectItem value="CG">Congo (Congo-Brazzaville)</SelectItem>
            <SelectItem value="CD">Congo (Democratic Republic)</SelectItem>
            <SelectItem value="CR">Costa Rica</SelectItem>
            <SelectItem value="HR">Croatia</SelectItem>
            <SelectItem value="CU">Cuba</SelectItem>
            <SelectItem value="CY">Cyprus</SelectItem>
            <SelectItem value="CZ">Czechia (Czech Republic)</SelectItem>
            <SelectItem value="DK">Denmark</SelectItem>
            <SelectItem value="DJ">Djibouti</SelectItem>
            <SelectItem value="DM">Dominica</SelectItem>
            <SelectItem value="DO">Dominican Republic</SelectItem>
            <SelectItem value="EC">Ecuador</SelectItem>
            <SelectItem value="EG">Egypt</SelectItem>
            <SelectItem value="SV">El Salvador</SelectItem>
            <SelectItem value="GQ">Equatorial Guinea</SelectItem>
            <SelectItem value="ER">Eritrea</SelectItem>
            <SelectItem value="EE">Estonia</SelectItem>
            <SelectItem value="SZ">Eswatini (formerly Swaziland)</SelectItem>
            <SelectItem value="ET">Ethiopia</SelectItem>
            <SelectItem value="FJ">Fiji</SelectItem>
            <SelectItem value="FI">Finland</SelectItem>
            <SelectItem value="FR">France</SelectItem>
            <SelectItem value="GA">Gabon</SelectItem>
            <SelectItem value="GM">Gambia</SelectItem>
            <SelectItem value="GE">Georgia</SelectItem>
            <SelectItem value="DE">Germany</SelectItem>
            <SelectItem value="GH">Ghana</SelectItem>
            <SelectItem value="GR">Greece</SelectItem>
            <SelectItem value="GD">Grenada</SelectItem>
            <SelectItem value="GT">Guatemala</SelectItem>
            <SelectItem value="GN">Guinea</SelectItem>
            <SelectItem value="GW">Guinea-Bissau</SelectItem>
            <SelectItem value="GY">Guyana</SelectItem>
            <SelectItem value="HT">Haiti</SelectItem>
            <SelectItem value="HN">Honduras</SelectItem>
            <SelectItem value="HU">Hungary</SelectItem>
            <SelectItem value="IS">Iceland</SelectItem>
            <SelectItem value="IN">India</SelectItem>
            <SelectItem value="ID">Indonesia</SelectItem>
            <SelectItem value="IR">Iran</SelectItem>
            <SelectItem value="IQ">Iraq</SelectItem>
            <SelectItem value="IE">Ireland</SelectItem>
            <SelectItem value="IL">Israel</SelectItem>
            <SelectItem value="IT">Italy</SelectItem>
            <SelectItem value="JM">Jamaica</SelectItem>
            <SelectItem value="JP">Japan</SelectItem>
            <SelectItem value="JO">Jordan</SelectItem>
            <SelectItem value="KZ">Kazakhstan</SelectItem>
            <SelectItem value="KE">Kenya</SelectItem>
            <SelectItem value="KI">Kiribati</SelectItem>
            <SelectItem value="KP">Korea, North</SelectItem>
            <SelectItem value="KR">Korea, South</SelectItem>
            <SelectItem value="KW">Kuwait</SelectItem>
            <SelectItem value="KG">Kyrgyzstan</SelectItem>
            <SelectItem value="LA">Laos</SelectItem>
            <SelectItem value="LV">Latvia</SelectItem>
            <SelectItem value="LB">Lebanon</SelectItem>
            <SelectItem value="LS">Lesotho</SelectItem>
            <SelectItem value="LR">Liberia</SelectItem>
            <SelectItem value="LY">Libya</SelectItem>
            <SelectItem value="LI">Liechtenstein</SelectItem>
            <SelectItem value="LT">Lithuania</SelectItem>
            <SelectItem value="LU">Luxembourg</SelectItem>
            <SelectItem value="MG">Madagascar</SelectItem>
            <SelectItem value="MW">Malawi</SelectItem>
            <SelectItem value="MY">Malaysia</SelectItem>
            <SelectItem value="MV">Maldives</SelectItem>
            <SelectItem value="ML">Mali</SelectItem>
            <SelectItem value="MT">Malta</SelectItem>
            <SelectItem value="MH">Marshall Islands</SelectItem>
            <SelectItem value="MR">Mauritania</SelectItem>
            <SelectItem value="MU">Mauritius</SelectItem>
            <SelectItem value="MX">Mexico</SelectItem>
            <SelectItem value="FM">Micronesia</SelectItem>
            <SelectItem value="MD">Moldova</SelectItem>
            <SelectItem value="MC">Monaco</SelectItem>
            <SelectItem value="MN">Mongolia</SelectItem>
            <SelectItem value="ME">Montenegro</SelectItem>
            <SelectItem value="MA">Morocco</SelectItem>
            <SelectItem value="MZ">Mozambique</SelectItem>
            <SelectItem value="MM">Myanmar (Burma)</SelectItem>
            <SelectItem value="NA">Namibia</SelectItem>
            <SelectItem value="NR">Nauru</SelectItem>
            <SelectItem value="NP">Nepal</SelectItem>
            <SelectItem value="NL">Netherlands</SelectItem>
            <SelectItem value="NZ">New Zealand</SelectItem>
            <SelectItem value="NI">Nicaragua</SelectItem>
            <SelectItem value="NE">Niger</SelectItem>
            <SelectItem value="NG">Nigeria</SelectItem>
            <SelectItem value="MK">North Macedonia</SelectItem>
            <SelectItem value="NO">Norway</SelectItem>
            <SelectItem value="OM">Oman</SelectItem>
            <SelectItem value="PK">Pakistan</SelectItem>
            <SelectItem value="PW">Palau</SelectItem>
            <SelectItem value="PA">Panama</SelectItem>
            <SelectItem value="PG">Papua New Guinea</SelectItem>
            <SelectItem value="PY">Paraguay</SelectItem>
            <SelectItem value="PE">Peru</SelectItem>
            <SelectItem value="PH">Philippines</SelectItem>
            <SelectItem value="PL">Poland</SelectItem>
            <SelectItem value="PT">Portugal</SelectItem>
            <SelectItem value="QA">Qatar</SelectItem>
            <SelectItem value="RO">Romania</SelectItem>
            <SelectItem value="RU">Russia</SelectItem>
            <SelectItem value="RW">Rwanda</SelectItem>
            <SelectItem value="KN">Saint Kitts and Nevis</SelectItem>
            <SelectItem value="LC">Saint Lucia</SelectItem>
            <SelectItem value="VC">Saint Vincent and the Grenadines</SelectItem>
            <SelectItem value="WS">Samoa</SelectItem>
            <SelectItem value="SM">San Marino</SelectItem>
            <SelectItem value="ST">Sao Tome and Principe</SelectItem>
            <SelectItem value="SA">Saudi Arabia</SelectItem>
            <SelectItem value="SN">Senegal</SelectItem>
            <SelectItem value="RS">Serbia</SelectItem>
            <SelectItem value="SC">Seychelles</SelectItem>
            <SelectItem value="SL">Sierra Leone</SelectItem>
            <SelectItem value="SG">Singapore</SelectItem>
            <SelectItem value="SK">Slovakia</SelectItem>
            <SelectItem value="SI">Slovenia</SelectItem>
            <SelectItem value="SB">Solomon Islands</SelectItem>
            <SelectItem value="SO">Somalia</SelectItem>
            <SelectItem value="ZA">South Africa</SelectItem>
            <SelectItem value="SS">South Sudan</SelectItem>
            <SelectItem value="ES">Spain</SelectItem>
            <SelectItem value="LK">Sri Lanka</SelectItem>
            <SelectItem value="SD">Sudan</SelectItem>
            <SelectItem value="SR">Suriname</SelectItem>
            <SelectItem value="SE">Sweden</SelectItem>
            <SelectItem value="CH">Switzerland</SelectItem>
            <SelectItem value="SY">Syria</SelectItem>
            <SelectItem value="TJ">Tajikistan</SelectItem>
            <SelectItem value="TZ">Tanzania</SelectItem>
            <SelectItem value="TH">Thailand</SelectItem>
            <SelectItem value="TL">Timor-Leste</SelectItem>
            <SelectItem value="TG">Togo</SelectItem>
            <SelectItem value="TO">Tonga</SelectItem>
            <SelectItem value="TT">Trinidad and Tobago</SelectItem>
            <SelectItem value="TN">Tunisia</SelectItem>
            <SelectItem value="TR">Turkey</SelectItem>
            <SelectItem value="TM">Turkmenistan</SelectItem>
            <SelectItem value="TV">Tuvalu</SelectItem>
            <SelectItem value="UG">Uganda</SelectItem>
            <SelectItem value="UA">Ukraine</SelectItem>
            <SelectItem value="AE">United Arab Emirates</SelectItem>
            <SelectItem value="GB">United Kingdom</SelectItem>
            <SelectItem value="US">United States of America</SelectItem>
            <SelectItem value="UY">Uruguay</SelectItem>
            <SelectItem value="UZ">Uzbekistan</SelectItem>
            <SelectItem value="VU">Vanuatu</SelectItem>
            <SelectItem value="VA">Vatican City</SelectItem>
            <SelectItem value="VE">Venezuela</SelectItem>
            <SelectItem value="VN">Vietnam</SelectItem>
            <SelectItem value="YE">Yemen</SelectItem>
            <SelectItem value="ZM">Zambia</SelectItem>
            <SelectItem value="ZW">Zimbabwe</SelectItem>
          </Select.Group>
        </Select.Viewport>
        <Select.ScrollDownButton className="flex h-6 cursor-default items-center justify-center text-violet-700">
          <ChevronDownIcon className="h-4 w-4 text-violet-700" />
        </Select.ScrollDownButton>
      </Select.Content>
    </Select.Portal>
  </Select.Root>
);

export default Country;
