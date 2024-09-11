import { Button, ButtonGroup, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import useRequest from "@/hooks/examples/useRequest";
import { BoxedContainer, PageName, Section } from "@/components/Styled";

export default function RequestPage() {
	const { user, login, loginLoading, logout } = useRequest();
	return (
		<Section>
			<BoxedContainer>
				<PageName>GET</PageName>
				<PageName>
					<Typography>{user?.id}</Typography>
					<Typography>{user?.email}</Typography>
				</PageName>
			</BoxedContainer>
			<BoxedContainer>
				<PageName>POST</PageName>
				<PageName>
					<ButtonGroup variant="contained" aria-label="Basic button group">
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
					</ButtonGroup>
				</PageName>
			</BoxedContainer>
		</Section>
	);
}
