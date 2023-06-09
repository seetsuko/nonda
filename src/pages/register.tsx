import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  FormLabel,
  Input,
  Button,
  VStack,
  Text,
  Box,
  Spinner,
  useToast,
} from '@chakra-ui/react';
import axios from 'axios';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { url } from '@/src/lib/apiPath/const';
import auth from '@/src/lib/firebase/firebase';
import { useAuthContext } from '../feature/auth/provider/AuthProvider';

const Register = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const toast = useToast();
  const router = useRouter();
  const { userDetails } = useAuthContext();

  useEffect(() => {
    if (userDetails) {
      router.push('/');
    }
  }, [userDetails]);

  const handleRegisterSubmit = async (data: any) => {
    setLoading(true);
    await createUserWithEmailAndPassword(auth, data.email, data.password)
      .then(() =>
        toast({
          title: 'ログインしました。',
          status: 'success',
          position: 'top',
        })
      )
      .catch((err) => {
        toast({
          title: 'エラーが発生しました。5秒後に画面が変わります',
          status: 'error',
          position: 'top',
        });
        console.log(err);
        setTimeout(() => router.push('/'), 5000);
      });

    // バックエンドに認証リクエストを送る
    const authData = getAuth();
    const currentUser = authData.currentUser;
    if (authData && currentUser) {
      const tokenData = await currentUser.getIdToken(true);
      const config = { tokenData };
      try {
        await axios.post(`${url}/auth/users`, config);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <Box>
      {!loading ? (
        <Box textAlign="center" p={50} bg="#fefefe" h="88vh">
          <Box>
            <Text fontSize="xl">新規登録</Text>
            <VStack>
              <form
                onSubmit={handleSubmit(handleRegisterSubmit)}
                className="user-form"
              >
                <Box>
                  <FormLabel htmlFor="email">
                    メールアドレス
                    <Input
                      id="email"
                      type="email"
                      placeholder="メールアドレスを入力"
                      autoComplete="off"
                      {...register('email', { required: true })}
                    />
                  </FormLabel>
                  {errors.email && (
                    <Text color="red.400">
                      メールアドレスを入力してください
                    </Text>
                  )}
                </Box>
                <Box>
                  <FormLabel htmlFor="password">
                    パスワード
                    <Input
                      type="password"
                      id="login-password"
                      placeholder="パスワードを入力"
                      autoComplete="off"
                      {...register('password', { required: true })}
                    />
                  </FormLabel>
                  {errors.password && (
                    <Text color="red.400">パスワードを入力してください</Text>
                  )}
                </Box>
                <Box>
                  <Button mt={4} mb={5} colorScheme="teal" type="submit">
                    登録
                  </Button>
                </Box>
                <Box borderBottom="solid 1px" w="120px" as="b" color="#3f13e0">
                  <Link href="/login">ログイン画面へ</Link>
                </Box>
              </form>
            </VStack>
          </Box>
        </Box>
      ) : (
        <Box mt="36vh" textAlign="center">
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </Box>
      )}
    </Box>
  );
};

export default Register;
