import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useBreadcrumb from '../../utils/hooks/useBreadcrumb';

const Wrap = ({ to, ...props }) => (to ? <Link {...props} to={to} /> : <React.Fragment {...props} />);

export default function BreadcrumbHeader() {
  const { current } = useBreadcrumb();

  return (
    <>
      <Breadcrumb>
        {!!current.length &&
          current.map(({ title, to }, index, arr) => (
            <BreadcrumbItem key={index} active={arr.length === index + 1} linkAs="div">
              <Wrap to={to}>{title}</Wrap>
            </BreadcrumbItem>
          ))}
      </Breadcrumb>
    </>
  );
}
