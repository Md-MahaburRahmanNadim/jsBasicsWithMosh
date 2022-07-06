/*  to write multiple line of text by using (string) literals is very ugly.Not for only multiple line of text for any kind of complex deceration of string. To solve this problem we have Templete Literals (``) which makes our job much more easyer */

const yourName = "Nadim";
const yourUnivesity = "NITER";

const templeteLiterals = ` My Name is
Md.  Mahabur Rahman Nadim. I study at 'NITER'`;

const dynamicTemplete = ` My Name is
${yourName}. I study at '${yourUnivesity}'
`;
