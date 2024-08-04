
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.14.0
 * Query Engine version: e9771e62de70f79a5e1c604a2d7c8e2a0a874b48
 */
Prisma.prismaVersion = {
  client: "5.14.0",
  engine: "e9771e62de70f79a5e1c604a2d7c8e2a0a874b48"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.SequelizeMetaScalarFieldEnum = {
  name: 'name'
};

exports.Prisma.Attendance_master_amScalarFieldEnum = {
  id_am: 'id_am',
  attendance_id: 'attendance_id',
  date: 'date',
  start_time: 'start_time',
  end_time: 'end_time',
  status_flag: 'status_flag',
  dwr_flag: 'dwr_flag',
  delete_flag: 'delete_flag',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.Document_master_rmScalarFieldEnum = {
  id_drm: 'id_drm',
  name_drm: 'name_drm',
  delete_flag_drm: 'delete_flag_drm',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.DropDown_master_dmScalarFieldEnum = {
  id_dm: 'id_dm',
  name_dm: 'name_dm',
  type_dm: 'type_dm',
  delete_flag_dm: 'delete_flag_dm',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.Dwr_date_adjust_ddaScalarFieldEnum = {
  id_dda: 'id_dda',
  employee_id_dda: 'employee_id_dda',
  date_dda: 'date_dda',
  status_dda: 'status_dda',
  delete_flag_dda: 'delete_flag_dda',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.Dwr_dsScalarFieldEnum = {
  id_ds: 'id_ds',
  employee_id_ds: 'employee_id_ds',
  date_ds: 'date_ds',
  from_time_ds: 'from_time_ds',
  to_time_ds: 'to_time_ds',
  task_id_ds: 'task_id_ds',
  project_name_ds: 'project_name_ds',
  task_description_ds: 'task_description_ds',
  reported_by_ds: 'reported_by_ds',
  ticket_type_ds: 'ticket_type_ds',
  status_ds: 'status_ds',
  estimated_date_ds: 'estimated_date_ds',
  solution_ds: 'solution_ds',
  delete_flag_ds: 'delete_flag_ds',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.Email_log_elScalarFieldEnum = {
  id: 'id',
  eamil_el: 'eamil_el',
  name_el: 'name_el',
  subject_el: 'subject_el',
  body_el: 'body_el',
  sent_at_el: 'sent_at_el',
  date_el: 'date_el',
  file_el: 'file_el',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.Employee_address_eaScalarFieldEnum = {
  id_ea: 'id_ea',
  employee_id_ea: 'employee_id_ea',
  address_type_ea: 'address_type_ea',
  address_line1_ea: 'address_line1_ea',
  address_line2_ea: 'address_line2_ea',
  country_ea: 'country_ea',
  pin_code_ea: 'pin_code_ea',
  city_ea: 'city_ea',
  state_ea: 'state_ea',
  contactno1_ea: 'contactno1_ea',
  contactno2_ea: 'contactno2_ea',
  delete_flag_ea: 'delete_flag_ea',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.Employee_document_edScalarFieldEnum = {
  id_ed: 'id_ed',
  employee_id_ed: 'employee_id_ed',
  document_type_ed: 'document_type_ed',
  upload_file_path_ed: 'upload_file_path_ed',
  description_ed: 'description_ed',
  delete_flag_ed: 'delete_flag_ed',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.Employee_educational_details_eedScalarFieldEnum = {
  id_eed: 'id_eed',
  employee_id_eed: 'employee_id_eed',
  degree_eed: 'degree_eed',
  institute_eed: 'institute_eed',
  startDate_eed: 'startDate_eed',
  endDate_eed: 'endDate_eed',
  percentage_eed: 'percentage_eed',
  deleteFlag_eed: 'deleteFlag_eed',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  document_eed: 'document_eed'
};

exports.Prisma.Employee_master_emScalarFieldEnum = {
  id_em: 'id_em',
  firstname_em: 'firstname_em',
  middlename_em: 'middlename_em',
  lastname_em: 'lastname_em',
  email_em: 'email_em',
  date_em: 'date_em',
  balanceleave_em: 'balanceleave_em',
  lastupdatedmonthyear_em: 'lastupdatedmonthyear_em',
  reporting_em: 'reporting_em',
  role_em: 'role_em',
  password_em: 'password_em',
  attendanceid_em: 'attendanceid_em',
  phone_number_em: 'phone_number_em',
  profile_em: 'profile_em',
  employment_type_em: 'employment_type_em',
  status_em: 'status_em',
  deleteFlag_em: 'deleteFlag_em',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.Employee_personal_details_epdScalarFieldEnum = {
  id_epd: 'id_epd',
  employee_id_epd: 'employee_id_epd',
  blood_group_epd: 'blood_group_epd',
  pan_no_epd: 'pan_no_epd',
  addhar_no_epd: 'addhar_no_epd',
  emergency_contact1_epd: 'emergency_contact1_epd',
  emergency_contact2_epd: 'emergency_contact2_epd',
  relation1_epd: 'relation1_epd',
  relation2_epd: 'relation2_epd',
  date_of_birth_epd: 'date_of_birth_epd',
  delete_flag_epd: 'delete_flag_epd',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  marital_status_epd: 'marital_status_epd',
  personal_email_epd: 'personal_email_epd',
  phone_number_epd: 'phone_number_epd',
  gender_epd: 'gender_epd',
  pan_no_path_epd: 'pan_no_path_epd',
  addhar_no_path_epd: 'addhar_no_path_epd',
  pan_no_name_epd: 'pan_no_name_epd',
  addhar_no_name_epd: 'addhar_no_name_epd'
};

exports.Prisma.Employee_salary_details_esdScalarFieldEnum = {
  id_esd: 'id_esd',
  employee_id_esd: 'employee_id_esd',
  bank_account_name_esd: 'bank_account_name_esd',
  ifsc_code_esd: 'ifsc_code_esd',
  account_no_esd: 'account_no_esd',
  uan_no_esd: 'uan_no_esd',
  epfo_no_esd: 'epfo_no_esd',
  annual_salary_esd: 'annual_salary_esd',
  monthly_salary_esd: 'monthly_salary_esd',
  delete_flag_esd: 'delete_flag_esd',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  document_esd: 'document_esd'
};

exports.Prisma.Holiday_master_hmScalarFieldEnum = {
  id_hm: 'id_hm',
  name_hm: 'name_hm',
  day_hm: 'day_hm',
  holiday_hm: 'holiday_hm',
  delete_flag_hm: 'delete_flag_hm',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.Leave_management_lmScalarFieldEnum = {
  id_lm: 'id_lm',
  employee_id_lm: 'employee_id_lm',
  leave_type_lm: 'leave_type_lm',
  description_lm: 'description_lm',
  start_date_lm: 'start_date_lm',
  end_date_lm: 'end_date_lm',
  no_of_days_lm: 'no_of_days_lm',
  balanced_leave_lm: 'balanced_leave_lm',
  status_lm: 'status_lm',
  delete_flag_lm: 'delete_flag_lm',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.Leave_master_rmScalarFieldEnum = {
  id_ltm: 'id_ltm',
  name_ltm: 'name_ltm',
  delete_flag_ltm: 'delete_flag_ltm',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.Letters_master_lmScalarFieldEnum = {
  id_lm: 'id_lm',
  letter_type_lm: 'letter_type_lm',
  path_lm: 'path_lm',
  delete_flag_lm: 'delete_flag_lm',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.Letters_type_master_ltmScalarFieldEnum = {
  id_ltm: 'id_ltm',
  letter_type_ltm: 'letter_type_ltm',
  path_ltm: 'path_ltm',
  delete_flag_ltm: 'delete_flag_ltm',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.Offer_letter_template_schema_oltsScalarFieldEnum = {
  id_olts: 'id_olts',
  paragraph1_olts: 'paragraph1_olts',
  paragraph2_olts: 'paragraph2_olts',
  paragraph3_olts: 'paragraph3_olts',
  paragraph4_olts: 'paragraph4_olts',
  paragraph5_olts: 'paragraph5_olts',
  delete_flag_olts: 'delete_flag_olts',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.Project_master_pmScalarFieldEnum = {
  id_pm: 'id_pm',
  name_pm: 'name_pm',
  client_name_pm: 'client_name_pm',
  client_location_pm: 'client_location_pm',
  contact_name_pm: 'contact_name_pm',
  contact_no_pm: 'contact_no_pm',
  email_pm: 'email_pm',
  tecnology_pm: 'tecnology_pm',
  employee_project_id_pm: 'employee_project_id_pm',
  description_pm: 'description_pm',
  start_date_pm: 'start_date_pm',
  end_date_pm: 'end_date_pm',
  status_pm: 'status_pm',
  delete_flag_pm: 'delete_flag_pm',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.Role_master_rmScalarFieldEnum = {
  id_rm: 'id_rm',
  name_rm: 'name_rm',
  delete_flag_rm: 'delete_flag_rm',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.Salary_slip_master_ssmScalarFieldEnum = {
  id_ssm: 'id_ssm',
  employee_id_ssm: 'employee_id_ssm',
  date_ssm: 'date_ssm',
  basic_salary_ssm: 'basic_salary_ssm',
  leave_ssm: 'leave_ssm',
  hra_ssm: 'hra_ssm',
  conveyance_ssm: 'conveyance_ssm',
  loan_ssm: 'loan_ssm',
  profession_tax_ssm: 'profession_tax_ssm',
  tds_it_ssm: 'tds_it_ssm',
  daily_wages_ssm: 'daily_wages_ssm',
  total_addition_ssm: 'total_addition_ssm',
  total_deduction_ssm: 'total_deduction_ssm',
  net_salary_ssm: 'net_salary_ssm',
  status_ssm: 'status_ssm',
  path_ssm: 'path_ssm',
  delete_flag_lm: 'delete_flag_lm',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.Task_master_tmScalarFieldEnum = {
  id_tm: 'id_tm',
  project_id_tm: 'project_id_tm',
  assign_by_id_tm: 'assign_by_id_tm',
  name_tm: 'name_tm',
  task_type_tm: 'task_type_tm',
  assign_to_tm: 'assign_to_tm',
  comment_tm: 'comment_tm',
  description_tm: 'description_tm',
  start_date_tm: 'start_date_tm',
  status_tm: 'status_tm',
  end_date_tm: 'end_date_tm',
  delete_flag_tm: 'delete_flag_tm',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.Technology_master_tmScalarFieldEnum = {
  id_tm: 'id_tm',
  name_tm: 'name_tm',
  delete_flag_tm: 'delete_flag_tm',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.Transporter_email_teScalarFieldEnum = {
  id: 'id',
  host_te: 'host_te',
  port_te: 'port_te',
  auth_user_te: 'auth_user_te',
  auth_password_te: 'auth_password_te',
  user_id_te: 'user_id_te'
};

exports.Prisma.Welcome_master_wmScalarFieldEnum = {
  id_wm: 'id_wm',
  employee_id_wm: 'employee_id_wm',
  personal_details_wm: 'personal_details_wm',
  education_details_wm: 'education_details_wm',
  details_details_wm: 'details_details_wm'
};

exports.Prisma.Question_bank_master_qbmScalarFieldEnum = {
  sr_no_qbm: 'sr_no_qbm',
  question_qbm: 'question_qbm',
  marks_qbm: 'marks_qbm',
  created_on: 'created_on',
  created_by: 'created_by',
  modified_on: 'modified_on',
  modified_by: 'modified_by',
  is_deleted: 'is_deleted'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullableJsonNullValueInput = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull
};

exports.Prisma.JsonNullValueInput = {
  JsonNull: Prisma.JsonNull
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};


exports.Prisma.ModelName = {
  SequelizeMeta: 'SequelizeMeta',
  attendance_master_am: 'attendance_master_am',
  document_master_rm: 'document_master_rm',
  dropDown_master_dm: 'dropDown_master_dm',
  dwr_date_adjust_dda: 'dwr_date_adjust_dda',
  dwr_ds: 'dwr_ds',
  email_log_el: 'email_log_el',
  employee_address_ea: 'employee_address_ea',
  employee_document_ed: 'employee_document_ed',
  employee_educational_details_eed: 'employee_educational_details_eed',
  employee_master_em: 'employee_master_em',
  employee_personal_details_epd: 'employee_personal_details_epd',
  employee_salary_details_esd: 'employee_salary_details_esd',
  holiday_master_hm: 'holiday_master_hm',
  leave_management_lm: 'leave_management_lm',
  leave_master_rm: 'leave_master_rm',
  letters_master_lm: 'letters_master_lm',
  letters_type_master_ltm: 'letters_type_master_ltm',
  offer_letter_template_schema_olts: 'offer_letter_template_schema_olts',
  project_master_pm: 'project_master_pm',
  role_master_rm: 'role_master_rm',
  salary_slip_master_ssm: 'salary_slip_master_ssm',
  task_master_tm: 'task_master_tm',
  technology_master_tm: 'technology_master_tm',
  transporter_email_te: 'transporter_email_te',
  welcome_master_wm: 'welcome_master_wm',
  question_bank_master_qbm: 'question_bank_master_qbm'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
