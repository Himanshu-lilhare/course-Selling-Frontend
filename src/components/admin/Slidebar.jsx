import { Button, HStack, VStack } from '@chakra-ui/react';
import React from 'react';
import {
  RiAddCircleFill,
  RiDashboardFill,
  RiEyeFill,
  RiUserFill,
} from 'react-icons/ri';
import { NavLink, useLocation } from 'react-router-dom';

function Linkbutton({ url, text, icon, active }) {
  return (
    <NavLink to={`/admin/${url}`}>
      <Button p={['1','2']} fontSize={['sm','larger']} colorScheme={active ? 'blue' : 'gray'}>
        {icon} {`...${text}`}
      </Button>
    </NavLink>
  );
}
const Slidebar = () => {
  const location = useLocation();
  return (
    <HStack
      boxShadow={'-2px 0 10px rgba(107,70,193,0.5)'}
      spacing={['2','8']}
      padding="6"
      justifyContent={"center"}
      margin={['2.5','0']}
      mt={['10','0']}
    >
      <Linkbutton
        url="admincourses"
        text="Courses"
        icon={<RiEyeFill />}
        active={location.pathname === '/admin/admincourses'}
      />
      <Linkbutton
        url="users"
        text="Users"
        icon={<RiUserFill />}
        active={location.pathname === '/admin/users'}
      />

      <Linkbutton
        url="createcourse"
        text="Create Course"
        icon={<RiAddCircleFill />}
        active={location.pathname === '/admin/createcourse'}
      />
    </HStack>
  );
};

export default Slidebar;
