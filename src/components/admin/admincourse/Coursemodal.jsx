import {
  Box,
  Button,
  Grid,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { useState } from 'react';
import { RiDeleteBin7Fill } from 'react-icons/ri';
import { useSelector } from 'react-redux';
// import Admincourse from './Admincourse'
const Coursemodal = ({
  isOpen,
  onClose,
  id,
  coursetitle,
  deletelecturehandler,
  addlecturehandler,
  lectures,
  loading,
}) => {
  const [title, settitle] = useState('');
  const [description, setdescription] = useState('');
  const [video, setvideo] = useState();
  const [videoprev, setvideoprev] = useState();

  function exitfrommodal() {
    settitle('');
    setdescription('');
    setvideo();
    setvideoprev();
    onClose();
  }
  function changevideohandler(e) {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setvideoprev(reader.result);
      setvideo(file);
    };
  }

  function Videocard({
    title,
    description,
    num,
    lectureid,
    courseid,
    deletebutton,
  }) {

    return (
      <Stack
        p={'3'}
        boxShadow="0 0 10px rgba(107,79,193,0.5)"
        direction={['column', 'row']}
        justifyContent={['flex-start', 'space-between']}
        borderRadius="lg"
        my={'8'}
      >
        <Box>
          <Heading size={'sm'} children={` #${num} ${title}`} />
          <Text children={description} />
        </Box>
        <Button
        
          colorScheme={'blue'}
          onClick={() => {
            deletebutton(lectureid, courseid);
          }}
        >
          <RiDeleteBin7Fill />
        </Button>
      </Stack>
    );
  }

  return (
    <Modal isOpen={isOpen} size="full">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader textAlign={'center'}>{coursetitle}</ModalHeader>
        <ModalCloseButton onClick={exitfrommodal} />
        <ModalBody p={['2', '6']}>
          <>
            <Box boxShadow={'1px 1px 10px 4px rgba(7, 61, 241, 0.2)'}>
              <form
                style={{
                  boxShadow: '1px 1px 10px 4px rgba(7, 61, 241, 0.2)',
                  padding: '6px 0 6px 0',
                }}
                onSubmit={e => {
                  addlecturehandler(e, title, description, id, video);
                  settitle('');
                  setvideo('');
                  setdescription('');
                  setvideoprev('');
                }}
              >
                <VStack>
                  <Heading
                    children="Add Lecture"
                    size="sm"
                    textTransform={'uppercase'}
                  />
                  <Input
                    placeholder="Enter Title"
                    value={title}
                    onChange={e => settitle(e.target.value)}
                  />
                  <Input
                    placeholder="Enter Title"
                    value={description}
                    onChange={e => setdescription(e.target.value)}
                  />
                  <Input
                    required
                    accept="video/mp4"
                    type={'file'}
                    onChange={e => changevideohandler(e)}
                  />
                  {videoprev && (
                    <video src={videoprev} controls controlsList="nodownload" />
                  )}
                  <Button
                    isLoading={loading}
                    type="submit"
                    colorScheme={'blue'}
                    w="full"
                  >
                    Upload
                  </Button>
                </VStack>
              </form>
            </Box>
            <Box px={['3', '7']} minH={'300px'}>
              {/* <Box my={'5'}>
                <Heading children={coursetitle} />
                <Heading children={`# ${id}`} size="sm" opacity={'0.7'} />
              </Box> */}
              <Heading children="ALL LECTURES" size={'sm'} mt={['5']} />

              {lectures && lectures.length > 0 ? (
                lectures.map((item, index) => (
                  <Videocard
                    key={index}
                    title={item.title}
                    description={item.description}
                    num={index + 1}
                    lectureid={item._id}
                    courseid={id}
                    deletebutton={deletelecturehandler}
                  />
                ))
              ) : (
                <Heading
                  mt={'130px'}
                  textAlign={'center'}
                  size={'md'}
                  children="No lectures Available"
                />
              )}
            </Box>
          </>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default Coursemodal;
