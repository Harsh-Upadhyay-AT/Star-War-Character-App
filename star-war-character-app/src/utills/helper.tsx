import moment from "moment"

export const convertToIndianDateFormat = (date: string| Date) => {
    return moment(date)?.format("DD-MM-YYYY")
  }

export const convertToYYYYMMDDwithTimeFormat = (date: Date) => {
    return moment(date)?.format("YYYY-MM-DD HH:mm:ss")
}