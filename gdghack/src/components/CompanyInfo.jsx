import { RiPhoneFill } from "react-icons/ri";
import { IoMdMail } from "react-icons/io";
import { FaBuilding } from "react-icons/fa6";
import React from "react";

function CompanyInfo({ companyInfo}) {
  return (
    <div className="flex flex-col gap-4">
    <h1 className="text-xl font-semibold">
      {companyInfo.name || "Bouchra Bachferrag"}
    </h1>
    <p className="text-gray-600">{companyInfo.description || "No description available."}</p>
  
    <div className="flex flex-col gap-2">
      {/* Phone */}
      {companyInfo.phone && (
        <div className="flex gap-2 items-center">
          <RiPhoneFill />
          <h3 className="font-semibold text-sm">{companyInfo.phone}</h3>
        </div>
      )}
  
      {/* Email */}
      {companyInfo.email && (
        <div className="flex gap-2 items-center">
          <IoMdMail />
          <h3 className="font-semibold text-sm">{companyInfo.email}</h3>
        </div>
      )}
  
      {/* Industry */}
      {companyInfo.industry && (
        <div className="flex gap-2 items-center">
          <FaBuilding />
          <h3 className="font-semibold text-sm">{companyInfo.industry}</h3>
        </div>
      )}
  
      {/* Location */}
      {companyInfo.location && (
        <div className="flex gap-2 items-center">
          <FaMapMarkerAlt />
          <h3 className="font-semibold text-sm">{companyInfo.location}</h3>
        </div>
      )}
  
      {/* Website */}
      {companyInfo.web_site && (
        <div className="flex gap-2 items-center">
          <FaGlobe />
          <a href={companyInfo.web_site} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
            {companyInfo.web_site}
          </a>
        </div>
      )}
    </div>
  </div>
  
  )
}

export default CompanyInfo