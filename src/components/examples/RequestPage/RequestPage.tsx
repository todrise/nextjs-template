import { Button, Divider, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import useRequest from "@/hooks/examples/useRequest";
import { PageName } from "@/components/Styled";

export default function RequestPage() {
	const { user, login, loginLoading, logout } = useRequest();
	return (
		<PageName>
			<Divider textAlign="left">GET</Divider>
			<>
				<Typography>{user?.id}</Typography>
				<Typography>{user?.email}</Typography>
			</>
			<Divider textAlign="left">POST</Divider>
			<LoadingButton
				size="small"
				variant="outlined"
				disableRipple
				loading={loginLoading}
				onClick={() => login({ email: "test@test.com", password: "123456" })}>
				Login
			</LoadingButton>
			<Button size="small" variant="outlined" disableRipple onClick={() => logout()}>
				Logout
			</Button>
		</PageName>
	);
}
