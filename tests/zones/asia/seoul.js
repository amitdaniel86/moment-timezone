"use strict";

var helpers = require("../../helpers/helpers");

exports["Asia/Seoul"] = {
	"1908" : helpers.makeTestYear("Asia/Seoul", [
		["1908-03-31T15:32:07+00:00", "23:59:59", "LMT", -30472 / 60],
		["1908-03-31T15:32:08+00:00", "00:02:08", "KST", -510]
	]),

	"1911" : helpers.makeTestYear("Asia/Seoul", [
		["1911-12-31T15:29:59+00:00", "23:59:59", "KST", -510],
		["1911-12-31T15:30:00+00:00", "00:30:00", "JCST", -540]
	]),

	"1937" : helpers.makeTestYear("Asia/Seoul", [
		["1937-09-30T14:59:59+00:00", "23:59:59", "JCST", -540],
		["1937-09-30T15:00:00+00:00", "00:00:00", "JST", -540]
	]),

	"1945" : helpers.makeTestYear("Asia/Seoul", [
		["1945-09-07T14:59:59+00:00", "23:59:59", "JST", -540],
		["1945-09-07T15:00:00+00:00", "00:00:00", "KST", -540]
	]),

	"1954" : helpers.makeTestYear("Asia/Seoul", [
		["1954-03-20T14:59:59+00:00", "23:59:59", "KST", -540],
		["1954-03-20T15:00:00+00:00", "23:30:00", "KST", -510]
	]),

	"1955" : helpers.makeTestYear("Asia/Seoul", [
		["1955-05-04T15:29:59+00:00", "23:59:59", "KST", -510],
		["1955-05-04T15:30:00+00:00", "01:00:00", "KDT", -570],
		["1955-09-08T14:29:59+00:00", "23:59:59", "KDT", -570],
		["1955-09-08T14:30:00+00:00", "23:00:00", "KST", -510]
	]),

	"1956" : helpers.makeTestYear("Asia/Seoul", [
		["1956-05-19T15:29:59+00:00", "23:59:59", "KST", -510],
		["1956-05-19T15:30:00+00:00", "01:00:00", "KDT", -570],
		["1956-09-29T14:29:59+00:00", "23:59:59", "KDT", -570],
		["1956-09-29T14:30:00+00:00", "23:00:00", "KST", -510]
	]),

	"1957" : helpers.makeTestYear("Asia/Seoul", [
		["1957-05-04T15:29:59+00:00", "23:59:59", "KST", -510],
		["1957-05-04T15:30:00+00:00", "01:00:00", "KDT", -570],
		["1957-09-21T14:29:59+00:00", "23:59:59", "KDT", -570],
		["1957-09-21T14:30:00+00:00", "23:00:00", "KST", -510]
	]),

	"1958" : helpers.makeTestYear("Asia/Seoul", [
		["1958-05-03T15:29:59+00:00", "23:59:59", "KST", -510],
		["1958-05-03T15:30:00+00:00", "01:00:00", "KDT", -570],
		["1958-09-20T14:29:59+00:00", "23:59:59", "KDT", -570],
		["1958-09-20T14:30:00+00:00", "23:00:00", "KST", -510]
	]),

	"1959" : helpers.makeTestYear("Asia/Seoul", [
		["1959-05-02T15:29:59+00:00", "23:59:59", "KST", -510],
		["1959-05-02T15:30:00+00:00", "01:00:00", "KDT", -570],
		["1959-09-19T14:29:59+00:00", "23:59:59", "KDT", -570],
		["1959-09-19T14:30:00+00:00", "23:00:00", "KST", -510]
	]),

	"1960" : helpers.makeTestYear("Asia/Seoul", [
		["1960-04-30T15:29:59+00:00", "23:59:59", "KST", -510],
		["1960-04-30T15:30:00+00:00", "01:00:00", "KDT", -570],
		["1960-09-17T14:29:59+00:00", "23:59:59", "KDT", -570],
		["1960-09-17T14:30:00+00:00", "23:00:00", "KST", -510]
	]),

	"1961" : helpers.makeTestYear("Asia/Seoul", [
		["1961-08-09T15:29:59+00:00", "23:59:59", "KST", -510],
		["1961-08-09T15:30:00+00:00", "00:30:00", "KST", -540]
	]),

	"1987" : helpers.makeTestYear("Asia/Seoul", [
		["1987-05-09T16:59:59+00:00", "01:59:59", "KST", -540],
		["1987-05-09T17:00:00+00:00", "03:00:00", "KDT", -600],
		["1987-10-10T16:59:59+00:00", "02:59:59", "KDT", -600],
		["1987-10-10T17:00:00+00:00", "02:00:00", "KST", -540]
	]),

	"1988" : helpers.makeTestYear("Asia/Seoul", [
		["1988-05-07T16:59:59+00:00", "01:59:59", "KST", -540],
		["1988-05-07T17:00:00+00:00", "03:00:00", "KDT", -600],
		["1988-10-08T16:59:59+00:00", "02:59:59", "KDT", -600],
		["1988-10-08T17:00:00+00:00", "02:00:00", "KST", -540]
	])
};